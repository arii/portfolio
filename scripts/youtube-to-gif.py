#!/usr/bin/env python3
import os
import sys
import subprocess
import argparse

def install_dependencies():
    """Ensure yt-dlp is installed."""
    try:
        import yt_dlp
    except ImportError:
        print("Installing yt-dlp...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "yt-dlp"])

def convert_youtube_to_gif(url, start_time, duration, output_path, fps=12, width=640, speed=1.0):
    """
    Downloads a segment from a YouTube video and converts it into an optimized GIF.
    """
    install_dependencies()
    import yt_dlp

    print(f"Fetching video stream from: {url}...")
    
    # Configure yt-dlp to get direct video URLs
    ydl_opts = {
        'format': '18/22/135/134/best[ext=mp4]/best',
        'quiet': True,
        'no_warnings': True,
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            info = ydl.extract_info(url, download=False)
            video_url = info.get('url')
            title = info.get('title', 'Video')
            print(f"Found video stream for: '{title}'")
        except Exception as e:
            print(f"Error fetching YouTube video info: {e}", file=sys.stderr)
            sys.exit(1)

    if not video_url:
        print("Could not retrieve a direct video stream URL.", file=sys.stderr)
        sys.exit(1)

    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    
    # Calculate segment read duration based on speed factor
    source_duration = duration * speed
    print(f"Downloading segment from {start_time} (duration: {source_duration}s at {speed}x speed) and compiling GIF...")
    
    filter_complex = f"[0:v]fps={fps},scale={width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=sierra2_4a"
    if speed != 1.0:
        filter_complex = f"[0:v]setpts={1.0/speed}*PTS,fps={fps},scale={width}:-1:flags=lanczos,split[s0][s1];[s0]palettegen=max_colors=256[p];[s1][p]paletteuse=dither=sierra2_4a"

    ffmpeg_cmd = [
        "ffmpeg",
        "-y",
        "-ss", start_time,
        "-t", str(source_duration),
        "-i", video_url,
        "-filter_complex", filter_complex,
        output_path
    ]

    try:
        subprocess.run(ffmpeg_cmd, check=True)
        print(f"Success! Optimized GIF saved to: {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"Error executing ffmpeg command: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert a segment of a YouTube video to an optimized GIF.")
    parser.add_argument("url", help="YouTube video URL (e.g. https://www.youtube.com/watch?v=...)")
    parser.add_argument("output", help="Output filepath for the GIF (e.g. public/assets/research/my_animation.gif)")
    parser.add_argument("--start", default="00:00:00", help="Start timestamp in HH:MM:SS or SS format (default: 00:00:00)")
    parser.add_argument("--duration", type=int, default=5, help="Duration of the clip in seconds (default: 5)")
    parser.add_argument("--fps", type=int, default=12, help="Frames per second for the GIF (default: 12)")
    parser.add_argument("--width", type=int, default=640, help="Maximum width of the GIF (default: 640)")
    parser.add_argument("--speed", type=float, default=1.0, help="Playback speedup factor (default: 1.0)")

    args = parser.parse_args()
    convert_youtube_to_gif(
        args.url,
        args.start,
        args.duration,
        args.output,
        fps=args.fps,
        width=args.width,
        speed=args.speed
    )

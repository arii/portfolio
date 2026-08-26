#!/usr/bin/env python3
import re
import subprocess
import os

TASKS = [
    # Duckietown
    {
        "url": "https://www.youtube.com/watch?v=rPpewHIF2KU",
        "gif": "public/assets/research/duckietown/navigation_1.gif",
        "start": "00:00:10",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/duckietown.md",
        "alt": "Duckietown Autonomous Driving Demonstration 1",
        "replace_target": "https://www.youtube.com/watch?v=rPpewHIF2KU"
    },
    {
        "url": "https://www.youtube.com/watch?v=HfS5Yj63H34",
        "gif": "public/assets/research/duckietown/navigation_2.gif",
        "start": "00:00:05",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/duckietown.md",
        "alt": "Duckietown Intersection Traffic Control",
        "replace_target": "https://www.youtube.com/watch?v=HfS5Yj63H34"
    },
    {
        "url": "https://www.youtube.com/watch?v=YTB2FgN_4zo",
        "gif": "public/assets/research/duckietown/navigation_3.gif",
        "start": "00:00:05",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/duckietown.md",
        "alt": "Autonomous Taxi Fleet Dispatch Demo",
        "replace_target": "https://www.youtube.com/watch?v=YTB2FgN_4zo"
    },
    # Master's Thesis
    {
        "url": "https://www.youtube.com/watch?v=PIhXfWyNPzQ",
        "gif": "public/assets/research/thesis/simulation_1.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "RL Simulation Run 1",
        "replace_target": "* [RL Simulation Run 1](https://www.youtube.com/watch?v=PIhXfWyNPzQ)"
    },
    {
        "url": "https://www.youtube.com/watch?v=M5PbYaPY0RE",
        "gif": "public/assets/research/thesis/simulation_2.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "RL Simulation Run 2",
        "replace_target": "* [RL Simulation Run 2](https://www.youtube.com/watch?v=M5PbYaPY0RE)"
    },
    {
        "url": "https://www.youtube.com/watch?v=8TKJiJnDOSo",
        "gif": "public/assets/research/thesis/simulation_3.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "RL Simulation Run 3",
        "replace_target": "* [RL Simulation Run 3](https://www.youtube.com/watch?v=8TKJiJnDOSo)"
    },
    {
        "url": "https://www.youtube.com/watch?v=lnHDDjkWKfE",
        "gif": "public/assets/research/thesis/simulation_4.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "RL Simulation Run 4",
        "replace_target": "* [RL Simulation Run 4](https://www.youtube.com/watch?v=lnHDDjkWKfE)"
    },
    {
        "url": "https://www.youtube.com/watch?v=s1vjsvnPfdc",
        "gif": "public/assets/research/thesis/simulation_5.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "RL Simulation Run 5",
        "replace_target": "* [RL Simulation Run 5](https://www.youtube.com/watch?v=s1vjsvnPfdc)"
    },
    {
        "url": "https://www.youtube.com/watch?v=gf2vNOKEKXc",
        "gif": "public/assets/research/thesis/simulation_6.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "RL Simulation Run 6",
        "replace_target": "* [RL Simulation Run 6](https://www.youtube.com/watch?v=gf2vNOKEKXc)"
    },
    {
        "url": "https://www.youtube.com/watch?v=bgHzqflrkCE",
        "gif": "public/assets/research/thesis/simulation_7.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "RL Simulation Run 7",
        "replace_target": "* [RL Simulation Run 7](https://www.youtube.com/watch?v=bgHzqflrkCE)"
    },
    {
        "url": "https://www.youtube.com/watch?v=2mGN3ka_7i0",
        "gif": "public/assets/research/thesis/grasping_1.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "PR2 Grasping Demonstration 1",
        "replace_target": "* [PR2 Grasping Demonstration 1](https://www.youtube.com/watch?v=2mGN3ka_7i0)"
    },
    {
        "url": "https://www.youtube.com/watch?v=-V2KtcETAi8",
        "gif": "public/assets/research/thesis/grasping_2.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "PR2 Grasping Demonstration 2",
        "replace_target": "* [PR2 Grasping Demonstration 2](https://www.youtube.com/watch?v=-V2KtcETAi8)"
    },
    {
        "url": "https://www.youtube.com/watch?v=QgoJKaoZ3dY",
        "gif": "public/assets/research/thesis/grasping_3.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/masters-thesis.md",
        "alt": "PR2 Grasping Demonstration 3",
        "replace_target": "* [PR2 Grasping Demonstration 3](https://www.youtube.com/watch?v=QgoJKaoZ3dY)"
    },
    # PhD dissertation page
    {
        "url": "https://www.youtube.com/watch?v=so-9kkQXlxc",
        "gif": "public/assets/research/phd/conformant_demo.gif",
        "start": "00:00:05",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "PR2 Physical Conformant Manipulation block placement demonstration",
        "replace_target": "https://www.youtube.com/watch?v=so-9kkQXlxc"
    },
    {
        "url": "https://www.youtube.com/watch?v=omdHFeBBYZ0",
        "gif": "public/assets/research/phd/icra_presentation.gif",
        "start": "00:00:05",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "ICRA 2018 Paper presentation conference spotlight video overview",
        "replace_target": "https://www.youtube.com/watch?v=omdHFeBBYZ0"
    },
    {
        "url": "https://www.youtube.com/watch?v=lrLWu9uQNIk",
        "gif": "public/assets/research/phd/sliding_1.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "Sliding alignment trajectory plan improvement",
        "replace_target": "https://www.youtube.com/watch?v=lrLWu9uQNIk"
    },
    {
        "url": "https://www.youtube.com/watch?v=EsfNJPkpheY",
        "gif": "public/assets/research/phd/sliding_2.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "Physical execution of plan improvement optimization on PR2",
        "replace_target": "https://www.youtube.com/watch?v=EsfNJPkpheY"
    },
    {
        "url": "https://www.youtube.com/watch?v=ubUMq8Rnb18",
        "gif": "public/assets/research/phd/refinement.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "Fixture guided trajectory refinement with artificial noise",
        "replace_target": "https://www.youtube.com/watch?v=ubUMq8Rnb18"
    },
    {
        "url": "https://www.youtube.com/watch?v=MBsnNbD18tU",
        "gif": "public/assets/research/phd/belief_1.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "Synthesized belief-state trajectory execution demonstration",
        "replace_target": "https://www.youtube.com/watch?v=MBsnNbD18tU"
    },
    {
        "url": "https://www.youtube.com/watch?v=yjhySqcgLi4",
        "gif": "public/assets/research/phd/belief_2.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "Multi-block funneling sequence plan execution",
        "replace_target": "https://www.youtube.com/watch?v=yjhySqcgLi4"
    },
    {
        "url": "https://www.youtube.com/watch?v=bWjzn89H1x4",
        "gif": "public/assets/research/phd/noise_model.gif",
        "start": "00:00:02",
        "duration": 5,
        "width": 480,
        "file": "src/content/research/conformant-planning-manipulation.md",
        "alt": "Vicon motion tracking trials action noise model characterization",
        "replace_target": "https://www.youtube.com/watch?v=bWjzn89H1x4"
    }
]

def main():
    print(f"Starting bulk YouTube to GIF conversion for {len(TASKS)} tasks...")
    
    for idx, task in enumerate(TASKS):
        print(f"\n--- Processing [{idx+1}/{len(TASKS)}]: {task['alt']} ---")
        
        # 1. Run youtube-to-gif conversion
        cmd = [
            "python3", "scripts/youtube-to-gif.py",
            task["url"], task["gif"],
            "--start", task["start"],
            "--duration", str(task["duration"]),
            "--width", str(task["width"])
        ]
        
        try:
            subprocess.run(cmd, check=True)
            print(f"Successfully generated GIF: {task['gif']}")
        except subprocess.CalledProcessError as e:
            print(f"Skipping task due to conversion error: {e}")
            continue

        # 2. Update the corresponding markdown file
        md_file = task["file"]
        if not os.path.exists(md_file):
            print(f"Warning: Markdown file {md_file} not found.")
            continue
            
        with open(md_file, "r") as f:
            content = f.read()
            
        # Format public/assets paths correctly for content relative resolution
        relative_gif = task["gif"].replace("public/assets", "/assets")
        
        # Build clickable GIF syntax
        no_embed_url = f"{task['url']}#no-embed"
        replacement_syntax = f"[![{task['alt']} | Watch Full Video Demonstration on YouTube ↗ | {no_embed_url}]({relative_gif}#max-w-2xl)]({no_embed_url})"
        
        # Replace the target in markdown content
        target = task["replace_target"]
        if target in content:
            new_content = content.replace(target, replacement_syntax)
            with open(md_file, "w") as f:
                f.write(new_content)
            print(f"Successfully updated markdown: {md_file}")
        else:
            # Fallback check if it was already updated
            if replacement_syntax in content:
                print(f"Already updated in markdown: {md_file}")
            else:
                print(f"Could not locate target reference '{target}' in {md_file}")

if __name__ == "__main__":
    main()

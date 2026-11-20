import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound: React.FC = () => (
  <section className="mx-auto max-w-2xl px-6 py-24 text-center">
    <Helmet>
      <title>Page not found | Ariel Anders</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <p className="text-sm font-semibold uppercase tracking-widest">404</p>
    <h1 className="mt-2 text-3xl font-bold">Page not found</h1>
    <p className="mt-4">This page doesn&apos;t exist or has moved.</p>
    <p className="mt-6 flex justify-center gap-6">
      <Link to="/" className="underline">Home</Link>
      <Link to="/research" className="underline">Research</Link>
      <Link to="/devai" className="underline">DevAI</Link>
    </p>
  </section>
);

export default NotFound;

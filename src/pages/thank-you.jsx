import Head from 'next/head';

import { SimpleLayout } from '@/components/SimpleLayout';

export default function ThankYou() {
    return (
        <>
            <Head>
                <title>You’re subscribed - Irsyad A. Panjaitan</title>
                <meta name='description' content='Thanks for subscribing to my newsletter.' />
            </Head>
            <SimpleLayout
                title='Thanks for subscribing.'
                intro='I won’t send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings.'
            />
        </>
    );
}

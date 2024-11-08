import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Task Management App',
    description:
        'A web-based application for managing tasks with advanced features and keyboard navigation',
    keywords: [
        'task management',
        'productivity',
        'project management',
        'React',
        'Next.js',
    ],
    authors: [{ name: 'Ajit Patil' }],
    creator: 'Ajit Patil',
    publisher: 'Ajit Patil',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://task-management-app.vercel.app',
        title: 'Task Management App',
        description:
            'Efficiently manage your tasks with our advanced web application',
        siteName: 'Task Management App',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Task Management App',
        description:
            'Efficiently manage your tasks with our advanced web application',
        creator: '',
    },
    viewport: {
        width: 'device-width',
        initialScale: 1,
        maximumScale: 1,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}

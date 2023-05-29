import Image from 'next/image';
import authorImage from '@/images/photos/image-1.jpg';
import clsx from 'clsx';

export function Author() {
    return (
        <section
            id='author'
            aria-labelledby='author-title'
            className='relative scroll-mt-14 pb-3 pt-8 sm:pb-16 sm:pt-10 lg:pt-16'>
            <div className='absolute inset-x-0 bottom-0 top-1/2 text-zinc-900/10 [mask-image:linear-gradient(transparent,white)]'>
                {/*<GridPattern x="50%" y="100%" />*/}
            </div>
            <div className='relative mx-auto max-w-5xl pt-16 sm:px-6'>
                <div className='rounded-3xl bg-zinc-50 pt-px dark:bg-black/40 sm:rounded-[5rem]'>
                    <div className='relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800/50 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-56 lg:w-56'>
                        <Image
                            className='absolute inset-0 h-full w-full object-cover object-top'
                            src={authorImage}
                            alt=''
                            sizes='(min-width: 1024px) 18rem, (min-width: 768px) 16rem, 11rem'
                        />
                    </div>
                    <div className='px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32'>
                        <SectionHeading number='5' id='author-title'>
                            Author
                        </SectionHeading>
                        <p className='font-display mt-8 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl'>
                            <span className='block text-teal-500'>Irsyad A. Panjaitan –</span>{' '}
                            Designer and developer from Indonesia.
                        </p>
                        <p className='mt-4 text-lg tracking-tight text-zinc-700 dark:text-zinc-400'>
                            Software engineer, author of book, creator of Parsinta, and indi
                            freelancer. I love to share my knowledge and experience with others.
                            Make the world a better place and help others to achieve their goals.
                        </p>
                        <p className='mt-8 lg:mt-12'>
                            <a
                                href='https://saweria.co/irsyadadl'
                                className='inline-flex items-center text-base font-medium tracking-tight text-teal-600 dark:text-teal-400'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='h-6 w-6'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>

                                <span className='ml-4'>Sponsors me on Saweria</span>
                            </a>
                        </p>
                        <p className='lg:mt-2'>
                            <a
                                href='https://github.com/sponsors/irsyadadl'
                                className='inline-flex items-center text-base font-medium tracking-tight text-teal-600 dark:text-teal-400'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='h-6 w-6'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>

                                <span className='ml-4'>Sponsors me on Github</span>
                            </a>
                        </p>
                        <p className='lg:mt-2'>
                            <a
                                href='https://parsinta.com/ebooks'
                                className='inline-flex items-center text-base font-medium tracking-tight text-teal-600 dark:text-teal-400'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth={1.5}
                                    stroke='currentColor'
                                    className='h-6 w-6'>
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M4.5 12.75l6 6 9-13.5'
                                    />
                                </svg>

                                <span className='ml-4'>Buy the book</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function SectionHeading({ number, children, className, ...props }) {
    return (
        <h2
            className={clsx(
                className,
                'inline-flex items-center rounded-full py-1 px-4 text-teal-600 ring-1 ring-inset ring-teal-600'
            )}
            {...props}>
            <span className='text-base font-medium tracking-tight'>{children}</span>
        </h2>
    );
}

import type { NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';
import { Alert } from '../components/Alert/Alert';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/BaseLayout.module.css'

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About &middot; 0xreeko</title>
                <meta name="description" title="description" content="Hey there, anon! I&apos;m 0xreeko, a Fullstack Web3 Developer solving problems and materialising visions into tangible products." />
            </Head>
            <Alert />
            <Header />
            <div className={styles.wrapper}>
                <main className={styles.main}>
                    <div className="flex items-center justify-center">
                        <h1 className='mt-12 font-bold text-m-h1 md:text-d-h1'>About</h1>
                    </div>
                    {/* <span>Estimated reading time: 1 minute, 45 seconds.</span> */}
                    <div id='about' className="flex flex-col w-full py-8 gap-y-12 text-d-base">
                        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
                            <div id="content" className='w-full'>
                                <p className='text-m-sub1 md:text-d-sub1'>GM anon👾,</p>
                                <p className='text-m-h2 md:text-d-h2'>I&apos;m Rico</p>
                                <p className='mt-2'>a Fullstack Web3 Developer solving problems and materialising visions into tangible products. Born in southwest Madrid, and I&apos;ve been living in London for the past 12 years. Currently focused on building RuskelUI and a portfolio of Web3 products.</p>
                            </div>
                            <div className='inline-flex p-2 rounded-full bg-gradient-to-tr from-amethyst-400/60 to-transparent w-fit'>
                                <div className="flex p-2 rounded-full bg-russian-600">
                                    <Image src={'/punk4596.png'} alt={'0xreeko LinkedIn headshot'} layout={"fixed"} width={200} height={200} className={'transform bg-amethyst-500 rounded-full'} />
                                </div>
                            </div>
                        </div>
                        <div id="background" className="relative flex flex-col">
                            <h2 className='underline text-m-h2 md:text-d-h2 underline-offset-4 text-amethyst-400'>Background</h2>
                            <p className='mt-3'>I&apos;ve been in the creative industry for 8 years as a freelance Digital Developer, covering: Djing, GFX, UI/UX, Motion Design, Web Development plus more. I graduated from the University of Northampton in 2020, having studied BSc Computing (Graphics & Visualisation).</p>
                            <div className='flex items-center justify-center w-full'><Image src={'/UoN-full--logo.png'} width={317.38} height={180} layout={'fixed'} /></div>
                            <p className='mt-3'>Post graduation, I spent some months learning about the dev side of Web3, leading to my full switch to Web3 in Jan 2021. Since then, I&apos;ve freelanced most of the time and helped many transition from Web2 to greener pastures. Currently, I&apos;m working on RuskelUI, a component library for Web3 that will help with the development of a Web3 business portfolio I intend to work on.</p>
                        </div>
                        <div id="experience">
                            <h2 className='underline text-m-h2 md:text-d-h2 underline-offset-4 text-amethyst-400'>Experience</h2>
                            <p className='mt-3'>Recently, I worked as a Web3 contractor with CWJ Capital, where I helped develop their UI and integrate Web3 tooling, managing to solve their biggest technical challenge within the first two weeks of being active in the role.</p>
                            <p className='mt-8'>Prior to CWJ Capital, I worked as an SDR/BDR Hybrid for European Gateway helping our tech clients with tasks like prospecting, cold calling, writing scripts for the team and more. It helped build the business & sales acumen I needed to acquire as I wanted to ship my own products in the Web3 space.</p>
                        </div>
                        <div id="interests">
                            <h2 className='underline text-m-h2 md:text-d-h2 underline-offset-4 text-amethyst-400'>Interests</h2>
                            <p className='mt-3'>Aside from Web3, my current interests are: Machine Learning & AI, Robotics, Internet of Things and the Mixed Reality umbrella. I&apos;ve developed in ML before <a href="https://medium.com/swlh/an-image-classifier-with-keras-2f0e9b868a36" className='italic underline duration-300 underline-offset-4 decoration-amethyst-400 hover:text-amethyst-400/60 text-amethyst-400' target={'_blank'} rel="noreferrer">(An Image Classifier with Keras)</a>, but my goal is to get deeper in my dev bag, build on these domains and mesh &apos;em with Web3 to ship the products of your tomorrow, today.</p>
                        </div>
                        <div id='outro' className="flex flex-col items-center gap-6 first-letter:justify-between md:flex-row">
                            <div className='inline-flex p-2 rounded-full bg-gradient-to-tr from-amethyst-400/60 to-transparent w-fit'>
                                <div className="flex p-2 rounded-full bg-russian-600">
                                    <Image src={'/linkedinHeadshot.jpeg'} alt={'0xreeko LinkedIn headshot'} layout={"fixed"} width={200} height={200} className={'rounded-full'} />
                                </div>
                            </div>
                            <p className=''>You can find me on <a href="https://twitter.com/intent/follow?screen_name=0xreeko" target={'_blank'} rel={'noreferrer'} className={'decoration-amethyst-400 underline underline-offset-4 duration-300 hover:text-amethyst-400'}>Twitter</a> where I share my progress and build cool sh*t in public, follow me on <a href="https://github.com/0xreeko" className='underline duration-300 decoration-amethyst-400 underline-offset-4 hover:text-amethyst-400' target={'_blank'} rel={'noreferrer'}>Github</a>, or connect with me on <a href='https://www.linkedin.com/in/enrictrillo/' className='underline duration-300 decoration-amethyst-400 underline-offset-4 hover:text-amethyst-400' target={'_blank'} rel={'noreferrer'}>LinkedIn</a>. I intend to post often about my findings, tutorials, the entire dev process of building Web3 biz initiatives and more.</p>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
};

export default About
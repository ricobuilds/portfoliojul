import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReekoPost } from '../../@types/schema';
import { tagsType } from '../../@types/tags';
import { HoriCard } from '../../components/HoriCard/HoriCard';
import { TagsGroup } from '../../components/TagsGroup/TagsGroup';
import {getTagPosts} from '../../controller/notion-controller';
import { BaseLayout } from '../../Layouts/Base';


const Tags: NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{`${router.query.tags} · Blog · 0xreeko`}</title>
                <meta name="0xreeko&pos;s blog" />
            </Head>
            <BaseLayout>
                <main className='flex-grow'>
                    <div className="w-full px-8 mt-12 sm:px-16 md:px-32 lg:px-64">
                        <div className="relative flex flex-col items-center justify-center">
                            <h1 className='font-bold text-m-h1 md:text-d-h1'>{(router.query.tags)}</h1>
                            <div className='mt-12'>
                                <div className="flex flex-wrap justify-center gap-3 mt-3">
                                    <TagsGroup />
                                </div>
                            </div>
                        </div>
                        <ol className='relative flex flex-col w-full gap-4 mt-12'>
                            <div className=" fixed -left-[5%] top-[25%] w-64 h-64 blur-[3px] opacity-20">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: 'rgb(238, 205, 163)' }}></stop><stop offset="100%" style={{ stopColor: 'rgb(239, 98, 159)' }}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
                            </div>
                            <div className=" fixed -right-[5%] top-[61%] w-72 h-72 blur-[3px] opacity-40 rotate-[66deg]">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" id="blobSvg"><defs><linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{ stopColor: 'rgb(238, 165, 236)' }}></stop><stop offset="100%" style={{ stopColor: 'rgb(101, 91, 255)' }}></stop></linearGradient></defs><path id="blob" fill="url(#gradient2)"><animate attributeName="d" dur="5000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate>                        </path>                    </svg>
                            </div>
                            {posts.length > 0 ? posts.map((item: ReekoPost) => (
                                <HoriCard key={item.id} slug={item.slug} title={item.title} date={item.date} description={item.description} tags={item.tags}/>
                            )) : (<p className='text-center text-sylver-700 text-d-base'>No blog posts available :/ Check back another time, or follow me on <a href="https://twitter.com/intent/follow?screen_name=0xreeko" target={`_blank`}><span className='underline text-azure-500 underline-offset-2'>twitter</span></a> for announcements.</p>)}
                        </ol>
                    </div>
                </main>
            </BaseLayout>
        </>
    )
};

export default Tags

export async function getStaticPaths() {
    const paths = tagsType.map(p => {
        return `/tags/${p}`
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    // @ts-ignore
    const posts = await getTagPosts(ctx?.params.tags)

    return {
        props: {
            posts
        }
    }
}

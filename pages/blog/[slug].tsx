import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import { RuiBreadcrumbs, RuiPill } from 'ruskelui';
import NotionController from '../../controller/notion-controller';
import { variant } from '../../@types/tags';
import { Tag } from '../../@types/schema';
import { BaseLayout } from '../../Layouts/Base';
import dayjs from '../../utils/day'
import styles from './Slug.module.css'

const Slug: NextPage = ({ markdown, post }: InferGetStaticPropsType<typeof getStaticProps>) => {

    const router = useRouter()
    return (
        <>
            {router.isReady ? (<>
                <Head>
                    <title>{`${post.title} | 0xreeko`}</title>
                    <meta name='description' title='description' content={post.description} />
                    <meta name='og:description' title='og:description' content={post.description} />
                </Head>
                <BaseLayout>
                    <main className='flex flex-col justify-center flex-grow px-8 sm:px-16 md:px-32 lg:px-64'>
                        <div className="py-4">
                            <RuiBreadcrumbs path={router.asPath} color={'amethyst'} />
                        </div>
                        <div className="flex flex-col items-center text-center gap-y-3">
                            <h1 className="mt-6 font-bold text-m-h1 md:text-d-h1">{post.title}</h1>
                            <p className='flex items-center gap-3 mt-4 text-d-bases'>
                                <span>{dayjs(post.date).format('LL - HH:mm')}</span>
                                <span>&middot;</span>
                                <span>Author: {post.author ? "0xreeko" : post.author}</span>
                                <span>&middot;</span>
                                <span className='flex gap-3'>{post.tags.map((tag: Tag) => (
                                    <RuiPill key={tag.id} color={variant[tag.name]}>{tag.name}</RuiPill>
                                ))}</span>
                                
                            </p>
                            <p className='my-4 italic text-sylver-700 text-m-sub2 md:text-d-sub2'>{post.description}</p>
                        </div>
                        <div className="max-w-full prose">
                            <ReactMarkdown className={styles.reekoStyle}>{markdown}</ReactMarkdown>
                        </div>
                        <div className="py-12">
                            <a href={`https://twitter.com/intent/tweet?url=enrictrillo.com${router.asPath}&text=${post.title}&via=0xreeko`} target={'_blank'}><p>Share on Twitter</p></a>
                        </div>
                    </main>
                </BaseLayout>
            </>) : "Loadin..."}
        </>
    )
};

export default Slug


export async function getStaticPaths() {
    const notionController = new NotionController()
    const posts = await notionController.getPublishedPosts()

    const paths = posts.map(p => {
        return `/blog/${p.slug}`
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const _notionController = new NotionController()

    // @ts-ignore
    const _page = await _notionController.getSingleReekoPost(ctx.params?.slug)
    if (!_page) {
        throw "Error"
    }
    return {
        props: {
            markdown: _page.markdown,
            post: _page.post
        },
    }
}
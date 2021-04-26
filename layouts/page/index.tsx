/**
 * @file Page Wrapper
 * @date 2020-04-01
 * @author Jubi
 * @lastModify Jubi 2020-04-26
 */
/* <------------------------------------ **** DEPENDENCE IMPORT START **** ------------------------------------ */
/** This section will include all the necessary dependence for this tsx file */
import { ReactNode } from 'react'
import Cursor from '@components/cursor'
import Head from 'next/head'
import SEO, { SEOProps } from '@components/seo'
import { wrapper } from './style'
import PhoneNavigation from '@components/navigation'
import WebNavigation from '@components/navi_web'
/* <------------------------------------ **** DEPENDENCE IMPORT END **** ------------------------------------ */
/* <------------------------------------ **** INTERFACE/TYPE START **** ------------------------------------ */
/** This section will include all the interface for this tsx file */
type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}
/* <------------------------------------ **** INTERFACE/TYPE END **** ------------------------------------ */


/* <------------------------------------ **** FUNCTION COMPONENT START **** ------------------------------------ */
const Page = ({ meta, children }: PageProps) => (
  <>
  {/* <------------------------------------ **** SECTION1 START **** ------------------------------------ */}
  {/** HEAD part / SEO setting */}
    <Head>
        <title>
            <SEO title="Jubi Chen" />
        </title>
        <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/39979025?s=400&u=7927353954ae03d6f8bd4053d9fc567769e9753b&v=4" type="image/x-icon"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&family=Manrope&display=swap" rel="stylesheet"/>
    </Head>
    {/* <------------------------------------ **** SECTION1 END **** ------------------------------------ */}
    {/* <------------------------------------ **** SECTION2 START **** ------------------------------------ */}
    {/** cursor */}
    <Cursor/>
    {/* <------------------------------------ **** SECTION2 END **** ------------------------------------ */}
    {/* <------------------------------------ **** SECTION3 START **** ------------------------------------ */}
    {/** main part */}
    <main css={wrapper}>
        <PhoneNavigation/>
        <WebNavigation/>
        {children}
    </main>
    {/* <------------------------------------ **** SECTION3 END **** ------------------------------------ */}
  </>
)
/* <------------------------------------ **** FUNCTION COMPONENT END **** ------------------------------------ */
export default Page
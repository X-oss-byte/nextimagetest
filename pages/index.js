import Head from 'next/head'
import styles from '../styles/Home.module.css'
import carTallImage from '../images/car-tall.jpg'
import plantWideImage from '../images/plant-wide.jpg'
import greenPlantTallImage from '../images/green-plant-tall.jpg'
import dogWideImage from '../images/dog-wide.jpg'
import lakeTallImage from '../images/lake-tall.jpg'
import beachWideImage from '../images/beach-wide.jpg'
import bridgeTallImage from '../images/bridge-tall.jpg'
import artWideImage from '../images/art-wide.jpg'

import Image from 'next/image'

export default function Home() {
  // let link = document.createElement("link")
  // link.setAttribute("rel", "preload")
  // link.setAttribute("as", "image")
  // link.setAttribute("imagesrcset", "/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=3840&q=75 3840w")
  // link.setAttribute("imagesizes", "45vw")
  // link.setAttribute("data-dyn", "true")
  // setTimeout(() => {
  //   document.getElementsByTagName("head")[0].prepend(link)
  // }, 50)

  //let scriptEl = document.createElement("script")
  // scriptEl.text = `let link = document.createElement("link")
  // link.setAttribute("rel", "preload")
  // link.setAttribute("as", "image")
  // link.setAttribute("imagesrcset", "/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=3840&q=75 3840w")
  // link.setAttribute("imagesizes", "45vw")
  // link.setAttribute("data-dyn", "true")
  // setTimeout(() => {
  //   document.getElementsByTagName("head")[0].prepend(link)
  // }, 50)`

  return (
    <div className={styles.container}>

      {/* <script dangerouslySetInnerHTML={`let link = document.createElement("link")
  link.setAttribute("rel", "preload")
  link.setAttribute("as", "image")
  link.setAttribute("imagesrcset", "/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=384&q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=640&q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=750&q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=828&q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1080&q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1200&q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=1920&q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=2048&q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fcar-tall.da853a5d2e4fee270cb54210de898f59.jpg&w=3840&q=75 3840w")
  link.setAttribute("imagesizes", "45vw")
  link.setAttribute("data-dyn", "true")
  setTimeout(() => {
    document.getElementsByTagName("head")[0].prepend(link)
  }, 50)`}></script> */}
      <Head>
        <title>Sharp image comparison</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>
          My Gallery
        </h2>

        <div className="flex-grid">
          <div className="col">
            <div className="gal-img">
              <Image src={carTallImage} priority layout="responsive" placeholder="blur" sizes="45vw" alt="sample image" />
            </div>
            <div className="gal-img">
              <Image src={dogWideImage} layout="responsive" placeholder="blur" sizes="45vw" alt="sample image" />
            </div>
            <div className="gal-img">
              <Image src={lakeTallImage} layout="responsive" placeholder="blur" sizes="45vw" alt="sample image" /> 
            </div>
            <div className="gal-img">
              <Image src={artWideImage} layout="responsive" placeholder="blur" sizes="45vw" alt="sample image" />
            </div>
          </div>
          <div className="col">
            <div className="gal-img">
              <Image src={plantWideImage} layout="responsive" placeholder="blur" sizes="45vw" alt="sample image"/>
            </div>
            <div className="gal-img">
              <Image src={greenPlantTallImage} layout="responsive" placeholder="blur" sizes="45vw" alt="sample image" />
            </div>
            <div className="gal-img">
              <Image src={beachWideImage} layout="responsive" placeholder="blur" sizes="45vw" alt="sample image" />
            </div>
            <div className="gal-img">
              <Image src={bridgeTallImage} layout="responsive" placeholder="blur" sizes="45vw" alt="sample image" />
            </div>
          </div>
        </div>
      </main>

      

    </div>
  )
}

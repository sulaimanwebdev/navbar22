import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="it">
            <Head>
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.11.1/css/all.css" key="fontawasome"/>
            </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
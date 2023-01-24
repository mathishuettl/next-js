import Layout from "@/components/Layout"
import Head from 'next/head'
import sss from "@/styles/test.module.scss"

export default function Home({projects}) {

  console.log(projects)

  return (
    <Layout>
      <Head>
        <title>Test</title>
      </Head>
      <p>From index.js</p>

      {
        projects.nodes.map(project => {
          return (
            <h3 key={project.slug}>{project.title}</h3>
          )
        })
      }
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://mathis1.at/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query AllProjectsQueryHome {
          projects {
            nodes {
              title
              slug
            }
          }
        }
      `
    })
  })

  const json = await res.json()

  return {
    props: {
      projects: json.data.projects
    }
  }
}
import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/SideBar'
import './global.css'



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Bernardo2905.png",
      name: "Bernardo Alves Padilha",
      role: "CTO BAP Dev's"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋🏽' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date("2022-12-25 20:00:00")
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rafaelppereira.png",
      name: "Rafael Pereira",
      role: "CTO Alpha Desenvolvimentos"
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋🏽' },
      { type: 'paragraph', content: 'acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date("2022-12-26 20:37:00")
  },
];

export function App() {
  return (
    <div className="w-full h-full bg-body">
      <Header />

      <div className="w-[70rem] mt-8 mx-auto py-0 px-4 grid grid-cols-[1fr] gap-8  md:grid-cols-[256px,1fr]">
        <SideBar />
        <main className="w-full">
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
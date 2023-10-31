import {Inter, Playfair_Display} from 'next/font/google'

const playfairDisplay = Playfair_Display({weight: "500",   subsets: ['latin'],
})

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className={playfairDisplay.className}>
      <header>
          <h1>
            Fran Farnos
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            </nav>
      </header>
    </main>
  )
}

import Image from 'next/image'
import styles from './page.module.css'

const people = [
  {
    name: 'Sergio Valbuena',
    role: 'IMD Student',
    imageUrl:'/images/SergioAvatar.png',
    bio: 'Sergio is  passionate about developing technologies that empower regular people to push the boundaries of what is possible.Whether you are looking for a sleek website, a custom Arduino project, or an immersive experience, Sergio has the skills and expertise to bring your vision to life. Sergio believes in the power of innovation and collaboration, and I am committed to helping you achieve your goals.',
  },
  {
    name: 'David Abram-Krismer ',
    role: 'ICS Student',
    imageUrl:'/images/DavidAvatar.png',
    bio: 'David is a Camosun College honor roll student. Since 2015, he’s been programming in a variety of languages, working professionally to create everything from games to full featured websites. Recent work includes web & game development for InsanityCorr Ltd. and website design/development for  HappinessMeansBusiness.com',
  },
  {
    name: 'Ryan Boado',
    role: 'IMD Student',
    imageUrl:
      '/images/RyanBoado.png',
    bio: 'Ryan Boado is an Interactive Media Developer student born and raised in Victoria. After an unsuccessful venture into the business program, Ryan shifted his interest towards programming and found his passion for web development and design. He is proficient in front-end languages such as HTML, CSS, Javascript and React. Ryan also has experience working in 3D environments such as game development in Unity and 3D modeling in Maya. With a keen interest in web development, Ryan is pursuing a career in the field with the goal to make the web more accessible and easier to use for everyone through clean code and design. ',
  },
  
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">🧑🏻‍💻 👨🏼‍🎨 🧑🏻‍💻</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Say hello to our dynamic squad! 🚀 We are tech enthusiasts, design mavens, and problem-solvers who love pushing boundaries and exceeding expectations. Our passion for creative solutions drives us to deliver exceptional results for our clients every time. Join us on this exciting journey of innovation and growth. 💪🏼
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none animate-fade-in"
        >
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-6 xl:flex-row animate-slide-in-right">
              {/* <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />*/}

              <Image
  src={person.imageUrl}
  alt=""
  className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
  width={500} // ancho de la imagen en píxeles
  height={400} // alto de la imagen en píxeles
/>

              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

}
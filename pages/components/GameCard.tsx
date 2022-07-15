interface GameCardProps {
  title: String;
  link: String;
}

export default function GameCard (props: GameCardProps) {
  return (
    <div className="flex flex-col justify-end w-full h-32 text-center rounded md:h-36 lg:h-44 bg-secondary-dark ">
      <a className="pb-2 text-sm text-white lg:text-base left-1/4" href={"/"+props.link}>{props.title}</a>
    </div>
  )
}
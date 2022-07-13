interface GameCardProps {
  title: String;
}

export default function GameCard (props: GameCardProps) {
  return (
    <div className="relative m-auto text-center rounded w-36 md:w-48 h-36 bg-secondary-dark">
      <h4 className="absolute text-white bottom-2 left-1/4">{props.title}</h4>
    </div>
  )
}
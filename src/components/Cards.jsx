/* eslint-disable react/prop-types */
export default function Cards(props) {
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const emoji = props.emoji;
  const title = props.title;
  const subtitle = props.subtitle;

  return (
    <>
      <div className="rounded-md bg-vite-cards w-[30rem] h-[15rem] ">
        <div className="flex ms-5 mt-5 text-3xl bg-vite-emojis-back rounded-md w-14 h-14 justify-center items-center">
          {emoji}
        </div>
        <h2 className="font-bold text-2xl ps-5 pt-3">{title}</h2>
        <p className="px-5 pt-3 text-2xl text-vite-subtext">{subtitle}</p>
      </div>
    </>
  );
}

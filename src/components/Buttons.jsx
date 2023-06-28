export default function Buttons(props) {
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const textInButt = props.text;
  return (
    <>
      <div className="flex rounded-full first:bg-vite-button  bg-vite-sub-button h-[2.4rem] w-[10rem] ps-4 last:w-[13rem]">
        <a href="#" className="text-left text-2xl">
          {textInButt}
        </a>
      </div>
    </>
  );
}

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ListBox = ({header="", subheader="", icon="send", ncols=1, listitems}) => {

    return (
        <div className={`flex flex-col py-5 px-2 m-3 w-full h-full bg-translucent-blue shadow shadow-grey text-md rounded`}>
            <div className='w-full h-1/6 min-h-[50px]'>
            <div className="flex justify-center mx-auto text-lg text-grey font-bold">
                {header}
            </div>
            <div className="flex justify-center mx-auto text-md text-grey font-semibold">
                {subheader}
            </div>
            </div>
            <div className={`grid grid-cols-${ncols} grid-rows-auto grid-flow-row gap-x-5 justify-evenly w-full h-full`}>
            {listitems.map((item, i) => {
                return (
                <div key={header+i} className="flex py-2">
                    <span className="material-symbols-outlined">{icon}</span>
                    <p className='text-sm md:text-md text-grey pl-1'>{item}</p>
                </div>
                )
            })}
            </div>
            </div>
    );
};

export default ListBox;
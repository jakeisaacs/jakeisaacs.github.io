import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ListBox = ({header, listitems}) => {

    return (
        <div className="grid grid-cols-1 grid-rows-auto grid-flow-row gap-x-5 justify-evenly content-normal p-2 m-3 w-full h-full bg-translucent-blue shadow shadow-grey text-md rounded">
            <div className="flex justify-center mx-auto text-lg text-grey font-bold">
                {header}
            </div>
            {listitems.map((item, i) => {
                return (
                <div key={header+i} className="flex justify-start">
                    <span className="material-symbols-outlined">
                        send
                    </span>
                    <p className='text-md text-grey'>&ensp; {item}</p>
                </div>
                )
            })}
        </div>
    );
};

export default ListBox;
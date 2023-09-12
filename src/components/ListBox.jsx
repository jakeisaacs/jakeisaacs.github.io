import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ListBox = ({listitems}) => {

    return (
        <div className="grid grid-cols-1 grid-rows-auto grid-flow-row gap-x-5 justify-evenly content-normal p-2 mx-3 w-full h-full bg-translucent-blue shadow shadow-grey text-md rounded">
            <div className="flex justify-center mx-auto text-lg text-grey font-bold">
                Programs
            </div>
            {listitems.map((item) => {
                return (
                <div className="flex justify-start">
                    <span class="material-symbols-outlined">
                        send
                    </span>
                    <p className='text-md'>&ensp; {item}</p>
                </div>
                )
            })}
        </div>
    );
};

export default ListBox;
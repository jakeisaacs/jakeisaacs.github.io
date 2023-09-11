
const ListBox = ({listitems}) => {

    return (
        <div className="flex justify-between px-10 mx-10 w-full bg-dark-grey shadow shadow-grey text-md rounded grid grid-cols-3 grid-rows-auto grid-flow-row gap-x-0">
            {listitems.map((item) => {
                return (
                <div className="flex fill justify-center shadow">
                    {item}
                </div>
                )
            })}
        </div>
    );
};

export default ListBox;
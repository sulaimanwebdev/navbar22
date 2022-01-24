import React from 'react';

interface ShowEntityProps{
    entityType: string, 
    name: string, 
}

const ShowEntity = (props: ShowEntityProps) => {

    let dots: string = '...............................';

    return (

        <div className="flex ...">
          <div className="flex-none opacity-[.65]">
            {props.entityType}
          </div>
          <div className="grow overflow-x-hidden tracking-wider opacity-[.65]">
            {dots}
          </div>
          <div className="flex-none ...">
            {props.name}
          </div>
        </div>

        // <table className="table-auto w-full">
        //     <tr>
        //         <td className="opacity-[.65] overflow-x-hidden tracking-wider"><span>{props.entityType}{dots}</span></td>
        //         <td className="block-inline">{props.name}</td>
        //     </tr>
        // </table>
    )
};

export default ShowEntity;
import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { IconContext } from "react-icons";

function Boards(props) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
      } = useSortable({id: props.id})
      
      const style = {
        transform: CSS.Transform.toString(transform),
        transition
      }

      function handle(e) {
        console.log(e);
      }
  return (
    <>
        <span className='board' ref={setNodeRef} style={style} {...attributes} {...listeners}>
                    <span className='boardColor'></span>
                    <p>{props.id}</p>
                    <span className='menu' onClick={handle(props.id)}>
                        <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
                            <FaEllipsisV />
                        </IconContext.Provider>
                        <span className='options' id={props.id}>
                          <span className='edit'>edit</span>
                          <span className='delete'>delete</span>
                        </span>
                    </span>
        </span>
    </>
  )
}

export default Boards
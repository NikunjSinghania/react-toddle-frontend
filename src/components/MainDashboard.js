import React, {useState } from 'react'
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { IconContext } from "react-icons";
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Boards from './Boards'

import '../css/MainDashboard.css'

function MainDashboard() {
    const [Board, setBoard] = useState('')
    const [langs, setLang] = useState(['JS', 'PYTHON', 'TS'])
    function handleDragEnd(event) {
        const { active, over } = event
    
        if(active.id !== over.id) {
          setLang((items) => {
            const activeIndex = items.indexOf(active.id)
            const overIndex = items.indexOf(over.id)
    
            return arrayMove(items, activeIndex, overIndex)
          })
        }
      }

    function creBoard() {
        document.querySelector('#panelNewBoard').style.display = 'flex'
    }

    function handleSubmit(e) {
        e.preventDefault()
        window.location.href = './Board'+Board
    }


  return (
    <div id="mainDashboardContainer">
        <form id='panelNewBoard' onSubmit={handleSubmit}>
            <span><h3>Add a name for your board</h3></span>
            <input onChange={e => setBoard(e.target.value)} type='text' required />
            <h3>Select post colour</h3>
            <p>Here are some templates to help you get started</p>
            <span id='colours'>
                <input className='color1' type='radio' name='colour'/>
                <input className='color2' type='radio' name='colour'/>
                <input className='color3' type='radio' name='colour'/>
                <input className='color4' type='radio' name='colour'/>
            </span>
            <button>Create Board</button>
        </form>
        <nav>
            <div id='leftSideContainer'>
                <img src={process.env.PUBLIC_URL+'/logop.png'} />
            </div>
            <div id='rightSideContainer'>
                <span id='searchContainer'>
                    <IconContext.Provider value={{ color: "grey", className: "global-class-name" }}>
                        <FaSearch />
                    </IconContext.Provider>
                    <input type='text' name='search' placeholder='Search'/>
                </span>
                <span id='createNewBoardButton' onClick={creBoard}>
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                        <FaPlus />
                    </IconContext.Provider>
                    <h5>Create New Board</h5>
                </span>
            </div>
        </nav>
        <section>
            <h2>Boards</h2>
            <div id="boardsContainer">
            <DndContext 
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
            <SortableContext
                items={langs}
                strategy={verticalListSortingStrategy}
            >
                {langs.map((e => <Boards key={e} id={e}/>))}

            </SortableContext>
            </DndContext>

            </div>
        </section>
    </div>
  )
}

export default MainDashboard
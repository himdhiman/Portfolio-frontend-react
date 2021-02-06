import React from 'react';

function SkillCard(props) {

    const renderskills = props.skills.map(skill => {
        return(
            <img src = {require(`${skill.svgsrc}`)} key = {skill.name} id = "skill-img" alt = ""></img>
        )
    });

    return (
        <div className = "ui equal width centered grid">
            <div className = "ui small images">
                {renderskills}
            </div>
        </div>
    )
}

export default SkillCard

import React from 'react';

export default function Form(){
    return(
        <div className = "Form">
            <h2>Form</h2>
            <form>
                <input type="text"/>
                <button type="submit" className="btn btn-primary">
                    <i class="far fa-calendar-plus"></i>
                </button>
            </form>
        </div>
    );
}
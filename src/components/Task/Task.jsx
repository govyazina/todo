export function Task({task}) {
    return (
        <>
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                   onChange={(event) => console.log(event.target.checked)}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {task}
            </label>
        </>
    )
}
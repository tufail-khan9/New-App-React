function InheritChildren({ children }) {
    return (
        <>
            <div className="para">
                <h2>This method is used for children</h2>
                {children}
            </div>
            <hr />
        </>
    )
}
export default InheritChildren;


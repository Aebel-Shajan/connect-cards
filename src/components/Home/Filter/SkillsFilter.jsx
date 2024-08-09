const SkillsFilter = ({ setFilterValue }) => {
    
    
    return (  
        <>
        <section className="skillsFilter">
            <select className="filter_selection" 
                    defaultValue="select-skill" 
                    onChange={(event) => setFilterValue(event.target.value)} 
            >
                <option value={""}> All </option>
                <option value={"Java"}> Java </option>
                <option value={"Python"}> Phyton </option>
                <option value={"JavaScript"}> JavaScript </option>
                <option value={"HTML"}> HTML </option>
                <option value={"CSS"}> CSS </option>
                <option value={"React"}> React </option>
                <option value={"SQL"}> SQL </option>
                <option value={"PostgreSQL"}> PostgreSQL </option>
                <option value={"AWS"}> AWS </option>
                <option value={"Azure"}> Azure </option>
                <option value={"MS Office"}> MS Office </option>
            </select>
        </section>
        </>
    );
}
 
export default SkillsFilter;

/* 
Jest
Git
*/
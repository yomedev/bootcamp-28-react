import React from 'react'

const skills = [
  { value: 'all', label: 'All' },
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
]

const SkillsFilters = ({ skill, onChangeSkills }) => {

  return (
    <fieldset className="ms-5">
      <legend>Skills:</legend>

      <div className="d-flex">
        {
          skills.map(({ value, label }) => (
            <div key={value} className="form-check me-4">
              <label className="form-check-label">
                <span>{label}</span>
                <input checked={value === skill} onChange={onChangeSkills} value={value} className="form-check-input" type="radio" name="skill" />
              </label>
            </div>
          ))
        }
      </div>
    </fieldset>
  )
}

export default SkillsFilters
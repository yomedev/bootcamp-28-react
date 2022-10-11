import React from 'react'
import AvailabilityFilters from './AvailabilityFilters'
import SkillsFilters from './SkillsFilters'
import SearchInput from './SearchInput'

const UserFilters = ({onSearchReset,onChangeSearch,onChangeSkills,onChangeAvailability, filter}) => {
  const {isAvailable, skills, search} = filter
  return (
    <>
      <div className="d-flex align-items-center mb-5">
        <AvailabilityFilters isAvailable={isAvailable} onChangeAvailability={onChangeAvailability} />
        <SkillsFilters skill={skills} onChangeSkills={onChangeSkills} />
      </div>

      <SearchInput onSearchReset={onSearchReset} value={search} onChangeSearch={onChangeSearch} />
    </>
  )
}

export default UserFilters
import React, { useEffect } from 'react';
import Skill from '../components/Skill';
import { useDispatch, useSelector } from 'react-redux';
import { allSkills } from '../state/skills/actions';
import style from '../styles/skills.module.scss';
import Search from './Search';

const AdminSkills = () => {
  const dispatch = useDispatch();

  const skills = useSelector((state) => state.skill.allSkills);

  useEffect(() => {
    dispatch(allSkills());
  }, [dispatch]);

  return (
    <>
      <br />
      <div>
        <h1 style={{ textAlign: 'center', color: 'blue', fontSize: '320%' }}>
          Skills
        </h1>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Search />
      </div>
      <div className={style.container}>
        {skills?.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
};

export default AdminSkills;

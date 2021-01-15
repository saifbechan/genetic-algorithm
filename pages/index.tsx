import React, { useEffect, useRef } from 'react';

import { NextPage } from 'next';
import P5 from 'p5';

import sketch from '../game/sketch';
import styles from '../styles/index.module.scss';

const Index: NextPage = () => {
  const p5Ref = useRef<P5>();
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (p5Ref !== null) {
      p5Ref.current?.remove();
      p5Ref.current = new (require('p5'))(sketch, canvasRef.current);
    }
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main} ref={canvasRef} />
    </div>
  );
};

export default Index;

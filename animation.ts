export const fadeInUp = {
    initial: {
      opacity: 0,
      Y: 60,
    },
    
    animate: {
      opacity: 1,
      Y: 0,
    },
  } 

  export const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    },
  } 
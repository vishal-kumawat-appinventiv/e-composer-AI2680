import { useEffect, useState } from "react";

// Custom Hook to animate the components
// Role - Trigger the animation on the component
// Takes numberOfAnimations as an optional parameter with default value of 1
// Takes duration as a arry of numbers run in sequence
// Returns an object with the animation state
export function useAnnimation(
  numberOfAnimations: number = 1,
  duration: number[]
) {
  const [annimation, setAnnimation] = useState<Record<number, boolean>>(() => {
    const initialState: Record<number, boolean> = {};
    for (let i = 1; i <= numberOfAnimations; i++) {
      initialState[i] = false;
    }
    return initialState;
  });

  useEffect(() => {
    setAnnimation((prevState) => ({ ...prevState, 1: true }));
    setTimeout(() => {
      setAnnimation((prevState) => ({ ...prevState, 2: true }));
    }, duration[0]);
    setTimeout(() => {
      setAnnimation((prevState) => ({ ...prevState, 3: true }));
    }, duration[1]);

    return () => {
      setAnnimation((prevState) => ({ ...prevState, 1: false }));
      setAnnimation((prevState) => ({ ...prevState, 2: false }));
      setAnnimation((prevState) => ({ ...prevState, 3: false }));
    };
  }, []);

  return annimation;
}

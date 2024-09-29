import { useEffect, useState } from "react";

export function useAnnimation(
  numberOfAnimations: number = 1,
  duration: number[]
) {
  const [annimation, setAnnimation] = useState<Record<number, boolean>>(() => {
    const initialState: Record<number, boolean> = {};
    for (let i = 1; i <= numberOfAnimations; i++) {
      initialState[i] = false;
    }
    console.log(initialState);
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

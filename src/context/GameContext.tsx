"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface GameContextProps {
  selected: number[];
  type: number;
  grid: number[];
  timer: number;
  score: number;
  level: number;
  experience: number;
  destroyingTiles: number[];
  add: (index: number, type: number) => void;
  clear: () => void;
  shiftBlocksDown: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

interface GameProviderProps {
  children: ReactNode;
}

const createInitialGrid = (rows: number, cols: number) => {
  return Array.from(
    { length: rows * cols },
    () => Math.floor(Math.random() * 5) + 1
  );
};

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const rows = 5,
    cols = 9;
  const [selected, setSelected] = useState<number[]>([]);
  const [type, setType] = useState<number>(0);
  const [grid, setGrid] = useState<number[]>(createInitialGrid(rows, cols));
  const [timer, setTimer] = useState<number>(50);
  const [score, setScore] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [experience, setExperience] = useState<number>(0);
  const [destroyingTiles, setDestroyingTiles] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const selectedRef = useRef(selected);
  const typeRef = useRef(type);

  const isConnected = (index1: number, index2: number) => {
    const row1 = Math.floor(index1 / cols),
      column1 = index1 % cols;
    const row2 = Math.floor(index2 / cols),
      column2 = index2 % cols;

    const rowDiff = Math.abs(row1 - row2);
    const colDiff = Math.abs(column1 - column2);

    return rowDiff <= 1 && colDiff <= 1;
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      clear();
    }, 2000);
  };

  const add = (index: number, t_type: number) => {
    if (selectedRef.current.includes(index)) {
      console.log("Tile is already selected");
      return;
    }

    if (
      selectedRef.current.length === 0 ||
      (isConnected(
        selectedRef.current[selectedRef.current.length - 1],
        index
      ) &&
        typeRef.current === t_type)
    ) {
      setType(t_type);
      typeRef.current = t_type;

      setSelected((prevSelected) => {
        const newSelected = [...prevSelected, index];
        selectedRef.current = newSelected;
        return newSelected;
      });

      resetTimer();
    } else {
      console.log("Tile is not connected");
    }
  };

  const clear = () => {
    if (selectedRef.current.length >= 2) {
      setDestroyingTiles([...selectedRef.current]);

      setTimeout(() => {
        const length = selectedRef.current.length;
        const newScore = score + length * 10;
        setScore(newScore);

        const newLevel = Math.floor(newScore / 600) + 1;
        const newExperience = newScore % 600;

        setLevel(newLevel);
        setExperience(newExperience);

        if (newLevel > level) {
          setTimer(50);
        } else {
          setTimer((prevTimer) => {
            if (prevTimer + length > 50) return 50;
            return prevTimer + length;
          });
        }

        shiftBlocksDown();
        setDestroyingTiles([]);
        setSelected([]);
        setType(0);
        selectedRef.current = [];
        typeRef.current = 0;
      }, 500);
    } else {
      setSelected([]);
      setType(0);
      selectedRef.current = [];
      typeRef.current = 0;
    }
  };

  const shiftBlocksDown = () => {
    const newGrid = [...grid];

    for (let col = 0; col < cols; col++) {
      let emptySpots = 0;

      for (let row = rows - 1; row >= 0; row--) {
        const index = row * cols + col;

        if (selectedRef.current.includes(index)) {
          emptySpots++;
        } else if (emptySpots > 0) {
          newGrid[(row + emptySpots) * cols + col] = newGrid[index];
        }
      }

      for (let row = 0; row < emptySpots; row++) {
        newGrid[row * cols + col] = Math.floor(Math.random() * 5) + 1;
      }
    }

    setGrid(newGrid);
  };

  useEffect(() => {
    resetTimer();

    gameIntervalRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          if (gameIntervalRef.current) {
            clearInterval(gameIntervalRef.current);
          }
          return 0;
        }
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      if (gameIntervalRef.current) {
        clearInterval(gameIntervalRef.current);
      }
    };
  }, []);

  return (
    <GameContext.Provider
      value={{
        selected,
        type,
        grid,
        timer,
        score,
        level,
        experience,
        destroyingTiles,
        add,
        clear,
        shiftBlocksDown,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };

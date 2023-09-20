import { useState } from "react";

export default function usePaginationButton({ Questions }) {
  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 5;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = Questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleNextPage = () => {
    const lastPage = Math.ceil(Questions.length / questionsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return {
    handleNextPage,
    handlePreviousPage,
    questionsPerPage,
    currentQuestions,
    currentPage,
  };
}

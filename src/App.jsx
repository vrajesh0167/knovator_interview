import { useState } from 'react';
import './App.css'

function App() {
  const [review, setReview] = useState({
    title: '',
    rating: '',
    description: '',
  });
  const [reviews, setReviews] = useState([]);

  const changeHandler = (e) => {
    setReview({
      ...review,
      [e.target.id]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (review.title && review.rating) {
      setReviews([...reviews, { ...review }]);
      setReview({ title: '', rating: '', description: '' });
    }
  };

  const resetHandler = () => {
    setReview({ title: '', rating: '', description: '' });
  };

  const deleteHandler = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <>
      {/* Give Review Section*/}
      <section>
        <div className="container mt-5">
          <div className=' border-2 p-5 bg-slate-200 rounded-lg max-w-2xl mx-auto'>
            <h2 className=' text-center text-3xl font-semibold text-sky-600'>Give Review</h2>
            <form onSubmit={submitHandler}>
              <div className=" flex flex-col gap-2 my-2">
                <label htmlFor="title" className=" text-xl font-semibold">Title*</label>
                <input type="text" id="title" value={review.title} onChange={changeHandler} required className=" w-full p-2 rounded-lg text-base italic" />
              </div>
              <div className=" flex flex-col gap-2 my-2">
                <label htmlFor="rating" className=" text-xl font-semibold">Rating*</label>
                <input type="number" id="rating" value={review.rating} onChange={changeHandler} required className=" w-full p-2 rounded-lg text-base italic" />
              </div>
              <div className=" flex flex-col gap-2 my-2">
                <label htmlFor="description" className=" text-xl font-semibold"> Description </label>
                <textarea id="description" value={review.description} onChange={changeHandler} className="w-full p-2 rounded-lg text-base italic" />
              </div>
              <div className=' mt-4 flex items-center justify-between'>
                <button type="submit" className=" py-2 px-4 bg-sky-600 border-2 border-sky-600 rounded-lg text-white text-lg font-semibold hover:bg-white hover:text-sky-600 transition-all"> Submit </button>
                <button type="button" className=" py-2 px-4 bg-sky-600 border-2 border-sky-600 rounded-lg text-white text-lg font-semibold hover:bg-white hover:text-sky-600 transition-all" onClick={resetHandler}> Reset </button>
              </div>
            </form> 
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {
        Array.isArray(reviews) && reviews.length === 0 ? null : (
          <section>
            <div className="container mt-5">
              <div className=' border-2 p-5 bg-slate-200 rounded-lg max-w-2xl mx-auto'>
                <h2 className=' text-center text-3xl font-semibold text-sky-600 mb-4'>Reviews</h2>
                <ul>
                  {reviews.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center border-b-2 border-sky-600">
                      <div>
                        <h5 className=' text-lg font-medium'>Title :- <span className=' text-base'>{item.title}</span></h5>
                        <p className=' text-lg font-medium'>Description :- <span className=' text-base'>{item.description}</span></p>
                        <p className=' text-lg font-medium'>Rating: <span className=' text-base'>{item.rating}</span></p>
                      </div>
                      <button className=" my-2 py-1 px-4 bg-sky-600 border-2 border-sky-600 rounded-lg text-white text-lg font-semibold hover:bg-white hover:text-sky-600 transition-all" onClick={() => deleteHandler(index)}> Delete </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )
      }
    </>
  )
}

export default App;
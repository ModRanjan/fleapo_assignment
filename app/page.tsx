import { COURCES } from '@/utils/data';
// import {
//   ChevronRight,
//   Download,
//   Eye,
//   Heart,
//   ShoppingCart,
//   Star,
// } from 'lucide-react';

export default function Home() {
  return (
    // <section className='courses-section'>
    //   <div className='header'>
    //     <h1>Most Popular Courses</h1>
    //     <p>
    //       Problems trying to resolve the conflict between the two major realms
    //       of Classical physics: Newtonian mechanics
    //     </p>
    //   </div>

    //   <div className='course-grid'>
    //     {COURCES.map((course) => (
    //       <article key={course.id} className='course-card'>
    //         <div className='card-image'>
    //           <img src={course.image} alt={course.title} />
    //           <h6 className='sale-badge'>Sale</h6>
    //           <div className='action-buttons'>
    //             <button aria-label='Like course' className='gradient_1'>
    //               <Heart size={20} />
    //             </button>
    //             <button aria-label='Add to cart' className='gradient_2'>
    //               <ShoppingCart size={20} />
    //             </button>
    //             <button aria-label='Share course' className='gradient_3'>
    //               <Eye size={20} />
    //             </button>
    //           </div>
    //         </div>

    //         <div className='card-content'>
    //           <div className='category'>
    //             <a className='category_title'>{course.category}</a>
    //             <div className='rating'>
    //               <Star size={16} fill='currentColor' />
    //               <span>{course.rating}</span>
    //             </div>
    //           </div>

    //           <h5>{course.title}</h5>
    //           <p>{course.description}</p>

    //           <h6 className='meta'>
    //             <Download size={16} /> <span>{course.sales} Sales</span>
    //           </h6>

    //           <h5 className='price'>
    //             <span className='original'>${course.originalPrice}</span>
    //             <span className='discounted'>${course.discountedPrice}</span>
    //           </h5>

    //           <a href='#' className='learn-more'>
    //             <h6>Learn More</h6>
    //             <ChevronRight size={16} />
    //           </a>
    //         </div>
    //       </article>
    //     ))}
    //   </div>
    // </section>

    <section className='popular-course-sec'>
      <div className='container-fluid'>
        <div className='sec-title'>
          <span className='sub-title'>Courses</span>
          <h2>Most Popular Courses</h2>
          <p>Problems trying to resolve the conflict between</p>
          <p>the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className='popular-course-wpr'>
          <div className='popular-course-slider'>
            {COURCES.map((cource) => {
              return (
                <div className='course-item' key={cource.id}>
                  <div className='course-card'>
                    <figure>
                      <img src={cource.image} alt={cource.title} />
                      <ul className='wishlist-wpr'>
                        <li>
                          <button>
                            <img src='images/wishlist-icon.svg' alt='' />
                          </button>
                        </li>
                        <li>
                          <button>
                            <img src='images/cart-icon.svg' alt='' />
                          </button>
                        </li>
                        <li>
                          <button>
                            <img src='images/view-icon.svg' alt='' />
                          </button>
                        </li>
                      </ul>
                      <ul className='tag-list'>
                        <li>
                          <span>Sale</span>
                        </li>
                      </ul>
                    </figure>
                    <div className='course-txt'>
                      <div className='training-txt'>
                        {cource.category}{' '}
                        <span>
                          <i>
                            <img src='images/rating-icon.svg' alt='' />
                          </i>{' '}
                          {cource.rating}
                        </span>
                      </div>
                      <h3 className='card-title'>{cource.title}</h3>
                      <p>{cource.description}</p>
                      <div className='sales'>
                        <i>
                          <img src='images/download-icon.svg' alt='' />
                        </i>{' '}
                        {cource.sales} Sales
                      </div>
                      <div className='price'>
                        ${cource.originalPrice}{' '}
                        <span>${cource.originalPrice}</span>
                      </div>
                      <ul className='course-btn-wpr'>
                        <li>
                          <a href='#url'>
                            Learn More{' '}
                            <img src='images/arrow-icon.svg' alt='' />{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

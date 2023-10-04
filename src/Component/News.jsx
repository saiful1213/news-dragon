/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { AiFillEye } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { BsShare } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const News = ({ news }) => {
   const { author, details, image_url, title, rating, total_view, _id } = news
   return (
      <div className='p-5 mb-7 border rounded-md'>
         <div className='flex justify-between items-center py-4 mb-4'>
            <div className="flex items-center gap-3">
               <img src={author.img} style={{ width: '40px', borderRadius: '50%' }} alt="" />
               <div>
                  <h1 className='text-[#403F3F] font-semibold'>{author.name}</h1>
                  <p className='text-sm text-[#706F6F]'>{author.published_date}</p>
               </div>
            </div>
            <div className='flex gap-3 items-center'>
               <p><BsBookmark className='text-[#706F6F]'/></p>
               <p><BsShare className='text-[#706F6F]'/></p>
            </div>
         </div>
         <h1 className='text-xl font-bold text-[403F3F] py-5'>{title}</h1>
         <img src={image_url} alt="" />
         {
            details.length > 200 ? 
            <p>{details.slice(0, 200)}... <Link to={`/news/${_id}`} className='text-blue-600 font-semibold'>Read More</Link></p> :
            <p>{details}</p>
         }
         
         <div className="flex justify-between mt-10">
            <p className='flex items-center gap-2 text-[#706F6F] font-medium'>
               <div className="rating w-24">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
               </div>
               {rating.number}
            </p>
            <p className='flex items-center gap-2 text-[#706F6F] font-medium'><AiFillEye size={'1.5rem'} />{total_view}</p>
         </div>
      </div>
   );
};

export default News;
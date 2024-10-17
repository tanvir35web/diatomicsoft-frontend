import {fetchReviews} from "@/store/slices/reviewSlice";
import { reviewsSelector } from '@/store/slices//reviewSlice';

import ReviewCard from "@/components/review/ReviewCard";
import {useFetchData} from "@/hooks/useFetchData";

const UserReviewSection = () => {

    const { data, status, error } = useFetchData(fetchReviews, reviewsSelector);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    const clientsReviews = data?.data;

    return (
        <section className=" py-12 px-4 md:px-8 lg:px-16 font-poppins">
            <div className="container mx-auto text-center mb-10">
                <h2 className="text-3xl font-poppins font-bold mb-2">Client Reviews</h2>
                <p className="text-gray-500 mb-10">Here's what our clients are saying about us.</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 container mx-auto">
                {clientsReviews && clientsReviews.map((review) => (
                    <ReviewCard key={review.id} clientProfilePhoto={review.profilePhoto || '/public/stock-images/ios-app.png'} clientName={review.clientName} clientPosition={review.designation} review={review.reviewText} rating={review.rating} />
                ))}
            </div>
        </section>
    );
};

export default UserReviewSection;

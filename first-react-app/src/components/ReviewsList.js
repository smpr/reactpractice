
  import React, {Component} from 'react';
  import Review from './Review';
  
    class ReviewsList extends Component {
      render() {
            
    const reviews = [
      {id: 1, title: "A Movie", author: 'Bill Murray', stuff: 'Random Quotes'},
      {id: 2, title: "Another Movie", author: 'Bill Murray', stuff: 'Random Quotes 2'},
      {id: 3, author: 'Bill Murray', stuff: 'Random Quotes 3'},
      {id: 4, author: 'Bill Murray', stuff: 'Random Quotes 4' },
      
    ];
    const reviewComponents = reviews.map((review) => {
      return <Review author={review.author} stuff={review.stuff} />;
    });
        return (
            <div>
              { reviewComponents }
            </div>
        );
      }
    }
  
    export default ReviewsList;
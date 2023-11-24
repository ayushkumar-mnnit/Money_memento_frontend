import React from 'react'
import './Textimonial.css'

export const Textimonial = () => {
  return (
   <>
    
    <section class="testimonial text-center">
        <div class="container1">

            <div class="heading white-heading">
                Testimonial
            </div>
            <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
             
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" alt='user' />
                            <p>"Incredibly efficient! This platform simplifies my financial life like nothing else. From tracking my expenses to analyzing trends, it's my go-to for staying on top of my finances effortlessly."</p>
                            <h4>💙</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" alt='user' /><p>"I can't recommend this website enough! It's a game-changer for managing group expenses. Splitting bills among friends has never been easier. Plus, the ability to download transaction records and receipts is a lifesaver!"</p>
                            <h4>💚</h4>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="img-circle img-responsive" alt='user' />
                            <p>"Finally found a comprehensive solution for managing transactions! This website does it all - from seamlessly adding transactions to generating insightful charts for a clear financial overview. It's become my indispensable tool for maintaining a healthy financial balance.""</p>
                            <h4>💛</h4>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#testimonial4" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#testimonial4" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    </section>

   </>
  )
}
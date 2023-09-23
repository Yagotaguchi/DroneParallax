import React from 'react'
import Phantom from '../Drones/Phantom'
import Mavic from '../Drones/Mavic'
import Inspire from '../Drones/Inspire'
import '../MelhoresDrones/melhoresdrones.css'



export default function melhoresdrones() {
  return (
    <body>
		<section class="conteudo-site">
			<div class="container">
				<h1 class="text-center">
					Melhores Drones
				</h1>
				<p class="text-center lead">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error accusantium laborum, hic nisi soluta quasi veritatis quod quam, architecto voluptatibus quibusdam quisquam consequuntur eum doloribus impedit aperiam nobis libero!
				</p>

				
				<div class="box">
					<div class="thumbnail">
						<Phantom/>
						<div class="text-center">
							<h3>Phantom</h3>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, illum!</p>
						</div>
					</div>
				</div>
				<div class="box">
					<div class="thumbnail">
						<Mavic/>
						<div class="text-center">
							<h3>Mavic</h3>
							<p>Corporis quas obcaecati quia provident accusantium officiis eaque repudiandae error.</p>
						</div>
					</div>
				</div>
				<div class="box">
					<div class="thumbnail">
                        <Inspire/>
						<div class="text-center">
							<h3>Inspire</h3>
							<p>Expedita aut dignissimos obcaecati animi recusandae! Dicta eaque ipsa asperiores!</p>
						</div>
					</div>
				</div>
			</div>	
		</section>
    </body>
  )
}

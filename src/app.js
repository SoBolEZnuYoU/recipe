import styles from './app.module.css'
import data from './data.json'
import { useState } from 'react'

export const App = () => {
	const [steps] = useState(data)
	const [activeIndex, setActiveIndex] = useState(0)
	const isFirstStep = activeIndex === 0 ? true : false
	const isLastStep = activeIndex === steps.length - 1 ? true : false
	const clickBack = () => {
		setActiveIndex((i) => i - 1)
	}
	const clickNext = () => {
		setActiveIndex((i) => i + 1)
	}
	const startOver = () => {
		setActiveIndex(0)
	}

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, i) => {
							return (
								<li
									className={
										styles['steps-item'] +
										' ' +
										[i === activeIndex ? styles.active : ''] +
										' ' +
										[i <= activeIndex ? styles.done : '']
									}
									key={step.id}
								>
									<button
										className={styles['steps-item-button']}
										onClick={() => {
											setActiveIndex(i)
										}}
									>
										{i + 1}
									</button>
									Шаг {i + 1}
								</li>
							)
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={clickBack}
							disabled={isFirstStep ? true : false}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={!isLastStep ? clickNext : startOver}
						>
							{!isLastStep ? 'Далее' : 'Начать сначала'}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

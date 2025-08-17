import type { Component, ComponentProps } from 'svelte';
import { ProjectModal } from '$lib/components/modals';

// 1. Define the props for your modal component as an explicit type.
// This removes the need for Svelte's ComponentProps utility.
export type ProjectModalProps = {
		image?: string;
		tooltip?: string;
		title?: string;
		description?: string;
		technologies?: string[];
		githubUrl?: string;
		demoUrl?: string;
		closeModal?: () => void;
};

// 2. Update the Project type to use this new explicit props type.
export type Project = {
	image: string;
	tooltip: string;
	modalComponent: Component;
	modalProps: ProjectModalProps;
};

// Store all project information in an array
export const projects: Project[] = [
	{
		image: 'images/projects/jasakula.png',
		tooltip: 'Jasakula',
		modalComponent: ProjectModal,
		modalProps: {
            image: 'images/projects/jasakula.png',
			title: 'Jasakula',
			description:
				'A comprehensive service platform for people who looking for freelancers, you can be either a client or a freelancer',
			technologies: ['React Native (Expo)', 'TypeScript', 'Node.js'],
			githubUrl: 'https://github.com/zeev-haydar/Jasakula'
		}
	},
	{
		image: 'images/projects/tugas-akhir.png',
		tooltip: 'NARM and SRGNN Comparative Study',
		modalComponent: ProjectModal,
		modalProps: {
            image: 'images/projects/tugas-akhir.png',
			title: 'NARM and SRGNN Comparative Study',
			description:
				'Research comparing neural recommendation models using a real life e-commerce dataset. This research also conducted hyperparameter tuning for the best model',
			technologies: ['Python', 'PyTorch', 'PyTorch Geometric', 'Optuna'],
			githubUrl: 'https://github.com/zeev-haydar/tugas-akhir-s1'
		}
	},
	{
		image: 'images/projects/bedtime-story.png',
		tooltip: 'Bedtime Story',
		modalComponent: ProjectModal,
		modalProps: {
            image: 'images/projects/bedtime-story.png',
			title: 'Bedtime Story',
			description: "A Local multiplayer game where you defend your bed from monsters' attack.",
			technologies: ['Unity', 'C#'],
			githubUrl: 'https://github.com/zeev-haydar/bedtime-stories'
		}
	},
	{
		image: 'images/projects/tunehive-ml.png',
		tooltip: 'TuneHive (ML part)',
		modalComponent: ProjectModal,
		modalProps: {
            image: 'images/projects/tunehive-ml.png',
			title: 'TuneHive (Machine Learning part)',
			description:
				'Machine learning development part of TuneHive, an music platform for indie artists. The machine learning part that was developed is a session-based recommendation system using GRU4REC algorithm that recommends a music to users based on their interaction history',
			technologies: ['Python', 'TensorFlow', 'FastAPI'],
            githubUrl: 'https://github.com/TuneHive/ML-TuneHive'
		}
	},
	{
		image: 'images/projects/infastq.jpg',
		tooltip: 'INFASTQ',
		modalComponent: ProjectModal,
		modalProps: {
			image: 'images/projects/infastq.jpg',
			title: 'INFASTQ',
			description: `
				Smart Infaq box system that utilize IoT and Machine Learning to automate the money counting system.
			`,
			technologies: ['Arduino (ESP32)', 'Python', 'Django', 'ScikitLearn', 'XGBoost'],
			githubUrl: 'https://github.com/Infastq'
		}
	},
	{
		image: 'images/projects/nss-baby-monitor.png',
		tooltip: 'Baby Care Monitor',
		modalComponent: ProjectModal,
		modalProps: {
			image: 'images/projects/nss-baby-monitor.png',
			title: 'Baby Care Monitor (Backend)',
			description: 'A Smart system that can help parents to monitor their babies remotely. It has a technology that can detect an crying sound and play a lullaby upon the detection',
			technologies: ['Python', 'Django', 'WebSocket', 'AI'],
			githubUrl: "https://github.com/zeev-haydar/TPK-BabyCareMonitor"
		}
	},
	{
		image: 'images/projects/millenium-app.jpg',
		tooltip: 'Millenium App',
		modalComponent: ProjectModal,
		modalProps: {
			image: 'images/projects/millenium-app.jpg',
			title: 'Millenium App',
			description: 'Learning app that tracks how you learn with personalized AI recommendation',
			technologies: ['Python', 'PyTorch', 'NextJS', 'NodeJS', 'TypeScript', 'Go'],
			githubUrl: 'https://github.com/GNF-Labs'
		}
	},
	{
		image: 'images/projects/laba-laba-sunda.webp',
		tooltip: 'Sprout Surge',
		modalComponent: ProjectModal,
		modalProps: {
			image: 'images/projects/laba-laba-sunda.webp',
			title: 'Sprout Surge',
			description: 'Simple stealth game where your character is a robot that trying to pick up items. At the mmoment, the GitHub URL of the project is unavailable because it is private',
			technologies: ['Unity', 'C#'],
		}
	}
];

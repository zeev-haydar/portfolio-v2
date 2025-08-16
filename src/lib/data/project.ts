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
	}
];

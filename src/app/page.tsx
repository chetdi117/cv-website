/** @format */

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import avatarImg from '../../assets/images/user-avatar.jpg';
import {
  Briefcase,
  Calendar,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { CVData, CVType } from '../../models';
import { cvData } from '../../data';

export default function Home() {
  const cv = cvData[CVType.FULLSTACK];
  const { user, skillGroups, experiences } = cv;
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={contentRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 scroll-smooth"
      id="cv-container">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <header className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 transform hover:shadow-2xl transition-all duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-16">
              <Image
                src={avatarImg}
                alt="Avatar"
                className="w-32 rounded-full border-4 border-white shadow-xl bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-600"
                priority
              />
              <div className="flex-1 text-center md:text-left mt-16 md:mt-4">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {user.fullName}
                </h1>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  {user.position}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <a
                      href={`mailto:${user.email}`}
                      className="hover:text-blue-600 transition-colors">
                      {user.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{user.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{user.birthDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section
              id="summary"
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Professional Summary
              </h2>

              <ul
                className="text-gray-700 leading-relaxed space-ml-3"
                style={{ marginLeft: '20px' }}>
                {user.infos.map((info, index) => (
                  <li
                    key={index}
                    className="list-disc space-y-2 marker:text-blue-600 marker:text-[14px]"
                    dangerouslySetInnerHTML={{ __html: info }}></li>
                ))}
              </ul>
            </section>

            <section
              id="experience"
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600" />
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, idx) => (
                  <div
                    className="relative pl-8 border-l-2 border-blue-200"
                    key={idx}>
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </p>
                    </div>
                    <div className="space-y-3 text-gray-700 text-sm">
                      <ul
                        className="text-gray-700 leading-relaxed space-ml-3 flex flex-col gap-2"
                        style={{ marginLeft: '20px' }}>
                        {exp.responsibilities.map(
                          (info: string, index: number) => (
                            <li
                              key={index}
                              className="list-disc space-y-2 marker:text-blue-600 marker:text-[14px]"
                              dangerouslySetInnerHTML={{ __html: info }}></li>
                          )
                        )}
                      </ul>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-xs font-semibold text-gray-600 mb-2">
                          Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech: string) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              id="education"
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-600" />
                Education
              </h2>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Industrial University of Ho Chi Minh City
                </h3>
                <p className="text-blue-600 font-semibold">
                  Bachelor's Degree in Computer Science
                </p>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4" />
                  June 2011 - June 2014
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  C#, WinForm, SQL Server, Java, C++
                </p>
              </div>
            </section>
          </div>

          <div id="skills" className="space-y-8">
            {skillGroups.map((group, index) => (
              <section
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                key={index}>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <group.icon.iconType className={group.icon.className} />
                  {group.name}
                </h2>
                <div className="space-y-2">
                  {group.child.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm">
                      <div className={group.markerClassName}></div>
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Languages</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold">English</span>
                    <span className="text-sm">Professional</span>
                  </div>
                  <div className="w-full bg-blue-400 rounded-full h-2">
                    <div
                      className="bg-white rounded-full h-2"
                      style={{ width: '80%' }}></div>
                  </div>
                  <p className="text-xs mt-1 opacity-90">Reading / Writing</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>Last updated: December 2025</p>
        </footer>
      </div>
    </div>
  );
}

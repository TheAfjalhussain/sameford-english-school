import { stagger } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from '../ui/section-heading';
import { api, getImageUrl } from '@/api/api';



export function FacilitiesPreview() {
    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const fetchFacilities = async () => {
        try {
          setLoading(true);
  
          const data = await api.getFacilities();
  
          console.log("🔥 Facilities:", data); // ✅ debug
  
          setFacilities(data);
        } catch (err) {
          console.error(err);
          setError("Failed to load facilities");
        } finally {
          setLoading(false);
        }
      };
  
      fetchFacilities();
    }, []);
  return (
    <div>
      {/* Facilities Preview */}
    <section className="section-container py-10 bg-background">
          <div className="container-custom">
            <SectionHeading
              badge="Infrastructure"
              title="Modern Learning Spaces"
              subtitle="Every facility is thoughtfully designed to create the best learning environment."
            />
    
            {/* STATES */}
            {loading ? (
              <p className="text-center py-10">Loading facilities...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : facilities.length === 0 ? (
              <p className="text-center">No facilities found</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                {facilities.map((f, i) => (
                  <motion.div
                    key={f.id}
                    {...stagger}
                    transition={{ delay: i * 0.08 }}
                    className="card-premium overflow-hidden !p-0 group"
                  >
                    {/* IMAGE */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={getImageUrl(f.imageUrl)}
                        alt={f.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
    
                    {/* CONTENT */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-lg mb-2">
                        {f.title}
                      </h3>
    
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
    </div>
  )
}


import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { usePageTitle } from '../hooks/usePageTitle'
import {
  fetchAdminStats,
  fetchAdminUsers,
  fetchAdminTestimonials,
  fetchAdminContacts,
  fetchAdminInterests,
  approveTestimonial,
} from '../services/adminService'
import toast from 'react-hot-toast'

function Admin() {
  usePageTitle('Admin Dashboard')
  const [stats, setStats] = useState(null)
  const [tab, setTab] = useState('overview')
  const [users, setUsers] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [contacts, setContacts] = useState([])
  const [interests, setInterests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const [s, u, t, c, i] = await Promise.all([
          fetchAdminStats(),
          fetchAdminUsers(),
          fetchAdminTestimonials(),
          fetchAdminContacts(),
          fetchAdminInterests(),
        ])
        setStats(s)
        setUsers(u)
        setTestimonials(t)
        setContacts(c)
        setInterests(i)
      } catch (err) {
        toast.error(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const handleApprove = async (id) => {
    try {
      await approveTestimonial(id, { isApproved: true })
      setTestimonials((prev) =>
        prev.map((t) => (t._id === id ? { ...t, isApproved: true } : t))
      )
      toast.success('Testimonial approved')
    } catch (err) {
      toast.error(err.message)
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contacts', label: 'Contacts' },
    { id: 'interests', label: 'Registrations' },
  ]

  return (
    <Layout>
      <section className="section-block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-text">Admin Dashboard</h1>
              <p className="text-text/60 mt-1">Manage EduGram platform data</p>
            </div>
            <Link to="/dashboard" className="text-primary font-semibold hover:underline text-sm">
              ← User dashboard
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  tab === t.id ? 'bg-primary text-white' : 'bg-white text-text/70 hover:bg-primary/10'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {loading ? (
            <p className="text-text/60">Loading...</p>
          ) : (
            <>
              {tab === 'overview' && stats && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    ['Users', stats.users],
                    ['Courses', stats.courses],
                    ['Testimonials', stats.testimonials],
                    ['New contacts', stats.contacts],
                    ['New interests', stats.interests],
                    ['Subscribers', stats.subscribers],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <p className="text-2xl font-bold text-text">{value}</p>
                      <p className="text-sm text-text/60 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'users' && (
                <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-left">
                      <tr>
                        <th className="p-4">Name</th>
                        <th className="p-4">Email</th>
                        <th className="p-4">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u._id} className="border-t border-gray-100">
                          <td className="p-4">{u.fullName}</td>
                          <td className="p-4">{u.email}</td>
                          <td className="p-4 capitalize">{u.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {tab === 'testimonials' && (
                <div className="space-y-4">
                  {testimonials.map((t) => (
                    <div key={t._id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="font-semibold text-text">{t.name}</p>
                          <p className="text-sm text-text/60">
                            {t.role} at {t.company}
                          </p>
                          <p className="text-sm text-text/70 mt-2 line-clamp-2">{t.content}</p>
                        </div>
                        {!t.isApproved && (
                          <button
                            type="button"
                            onClick={() => handleApprove(t._id)}
                            className="shrink-0 px-3 py-1.5 bg-primary text-white text-sm rounded-lg"
                          >
                            Approve
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'contacts' && (
                <div className="space-y-3">
                  {contacts.map((c) => (
                    <div key={c._id} className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="font-medium">{c.name} — {c.email}</p>
                      <p className="text-sm text-text/60 mt-1">{c.message}</p>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'interests' && (
                <div className="space-y-3">
                  {interests.map((r) => (
                    <div key={r._id} className="bg-white rounded-xl p-4 border border-gray-100">
                      <p className="font-medium">{r.name} — {r.phone}</p>
                      <p className="text-sm text-text/60">{r.email} · {r.courseType}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </Layout>
  )
}

export default Admin

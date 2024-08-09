"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,  DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [spaces, setSpaces] = useState([
    {
      id: 1,
      name: "Marketing Team",
      description: "Collaborative workspace for the marketing team.",
    },
    {
      id: 2,
      name: "Engineering Hub",
      description: "Dedicated space for the engineering team to work.",
    },
    {
      id: 3,
      name: "Design Studio",
      description: "Creative workspace for the design team.",
    },
  ])
  const [showModal, setShowModal] = useState(false)
  const [newSpace, setNewSpace] = useState({
    name: "",
    description: "",
  })
  const handleCreateSpace = () => {
    setShowModal(true)
  }
  const handleSaveSpace = () => {
    setSpaces([...spaces, { id: spaces.length + 1, ...newSpace }])
    setShowModal(false)
    setNewSpace({ name: "", description: "" })
  }
  return (
    <div className="flex flex-col w-full min-h-screen bg-muted/40">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4" prefetch={false}>
          <FrameIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="font-bold" prefetch={false}>
            Spaces
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Members
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Settings
          </Link>
        </nav>
        {/* <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="secondary" size="icon" className="rounded-full ml-auto">
            <img src="/placeholder.svg" width="32" height="32" className="rounded-full border" alt="Avatar" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div> */}
      </header>
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          {/* <Button variant="outline" onClick={handleCreateSpace}>Add Space</Button> */}
          <Button variant="outline" asChild>
            <Link href="/dashboard/space">
              Add Space
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          {spaces.map((space) => (
            <Card key={space.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <HomeIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <CardTitle>{space.name}</CardTitle>
                  <CardDescription>{space.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-[420px]">
          <DialogHeader>
            <DialogTitle>Create New Space</DialogTitle>
            <DialogDescription>Enter the details for your new space.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newSpace.name}
                onChange={(e) => setNewSpace({ ...newSpace, name: e.target.value })}
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newSpace.description}
                onChange={(e) => setNewSpace({ ...newSpace, description: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveSpace}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function FrameIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}


function HomeIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function XIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}